'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setErrorMessage('');

    const res = await fetch('/api/Users', {
      method: 'POST',
      body: JSON.stringify({ formData }),
      'content-type': 'application/json',
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push('/');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-3 w-1/3" action="">
        <h1>Create new user</h1>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleChange} value={formData.name} required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} required />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <input type="submit" value="Create User" className="bg-blue-300 hover:gb-blue-100" />
      </form>
      <p className="text-red-500">{errorMessage}</p>
    </>
  );
};

export default UserForm;
