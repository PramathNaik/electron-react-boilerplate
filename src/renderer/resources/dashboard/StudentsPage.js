import React, { useState, useEffect } from 'react';
import { authFetch } from '../../scripts/AuthProvider';

export const StudentsPage = () => {
  const [apiResponse, setApiResponse] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState(() => {
    const storedKeys = localStorage.getItem('selectedKeys');
    return storedKeys ? JSON.parse(storedKeys) : [];
  });
  const [searchData, setsearchData] = useState("");
  const [classFilter, setClassFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  useEffect(() => {
    getStudentData();
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedKeys', JSON.stringify(selectedKeys));
  }, [selectedKeys])


  const getStudentData = async () => {
    try {
      const response = await authFetch("/v2/students/", null, "GET");
      const data = await response;
      setApiResponse(data);
      setSelectedKeys(selectedKeys !== null ? selectedKeys : Object.keys(data[0]));
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedKeys([...selectedKeys, value]);
    } else {
      setSelectedKeys(selectedKeys.filter((key) => key !== value));
    }
  };
  const handleSearch = (event) => {
    setsearchData(event.target.value);
  };

  const handleClassFilterChange = (event) => {
    setClassFilter(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const filteredStudents = apiResponse.filter((student) =>
  (student.first_name.toLowerCase().includes(searchData.toLowerCase()) ||
    student.last_name.toLowerCase().includes(searchData.toLowerCase())) &&
  (classFilter === "All" || student.classEnrolled === classFilter) &&
  (categoryFilter === "All" || student.category === categoryFilter)
);
  return (
    <div className='container'>
      <div className="uk-grid-small uk-child-width-1-2@s" data-uk-grid>
        <div className='uk-width-expand@m'>
        <div className=""><input type='text' className='uk-input search' placeholder='Search Students' onChange={handleSearch} /></div>
        </div>
        <div className="uk-width-1-5@m">
          <div className=""><button className='uk-button uk-button-primary cre'>New Admission</button></div>
        </div>
      </div>
      <div className="uk-grid-small uk-child-width-1-5@s create1" data-uk-grid>
        <div>
          <div className="">All Students</div>
        </div>
        <div className="">
          <div className="">Classes</div>
          <select value={classFilter} onChange={handleClassFilterChange}>
          <option value="All">All</option>
          {/* Assuming apiResponse is available and it contains unique classEnrolled values */}
          {Array.from(new Set(apiResponse.map(student => student.classEnrolled))).map((classEnrolled, index) => (
            <option key={index} value={classEnrolled}>{classEnrolled}</option>
          ))}
        </select>
        </div>
        <div>
          <div className="">Categories</div>
          <select value={categoryFilter} onChange={handleCategoryFilterChange}>
            <option value="All">All</option>
            {Array.from(new Set(apiResponse.map(student => student.category))).map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="uk-inline">
          <div className="">Recent Admission</div>
        </div>
        <div className="uk-inline">
          <button className="uk-button uk-button-default" type="button" >
          <span class="material-symbols-outlined">
          lists
          </span>
          </button>
          <div data-uk-dropdown>
            {Object.keys(apiResponse[0] || {}).map((key) => (
              <div key={key}>
                <label className="uk-nav uk-dropdown-nav">
                  <input className='uk-checkbox' type="checkbox" value={key} checked={selectedKeys.includes(key)} onChange={handleCheckboxChange} /> {key}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div class="uk-overflow-auto">
      <table className="rwd-table">
        <thead>
          <tr>
            {selectedKeys.map((key) => (
              <th key={key}>{key}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              {selectedKeys.map((key) => (
                <td key={key}>{student[key]}</td>
              ))}
              <td className='red'>Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

    </div>
  );
};
