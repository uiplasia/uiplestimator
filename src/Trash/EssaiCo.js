import React, { useState } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';

const EssaiCo = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');
  const [hobby, setHobby] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'salary':
        setSalary(value);
        break;
      case 'hobby':
        setHobby(value);
        break;
      default:
        break;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log({ name, age, salary, hobby });

    try {
      const response = await fetch("https://sheet.best/api/sheets/7a1fa291-58ee-4641-a331-80e47cdeacf4", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, salary, hobby }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container fluid className="container">
      <Header as='h2'>React Google Sheets!</Header>
      <Form className="form" onSubmit={submitHandler}>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Enter your name' type="text" name="name" value={name} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input placeholder='Enter your age' type="number" name="age" value={age} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input placeholder='Enter your salary' type="number" name="salary" value={salary} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Hobby</label>
          <input placeholder='Enter your hobby' type="text" name="hobby" value={hobby} onChange={handleChange} />
        </Form.Field>

        <Button color="blue" type='submit'>Add raw</Button>
      </Form>
    </Container>
  );
}

export default EssaiCo;
