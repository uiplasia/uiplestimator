import React, { useState } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';

const GoogleSheetDataF = () => {
    const [srNo, setSrNo] = useState('');
    const [workCategory, setWorkCategory] = useState('');
    const [subCategory, setSubCategory] = useState(''); 
    const [planType, setPlanType] = useState('');
    const [unit, setUnit] = useState('');
    const [totalSqft, setTotalSqft] = useState(''); 
    const [quantityMultiplier, setQuantityMultiplier] = useState(''); 
    const [rate, setRate] = useState('');
    const [price, setPrice] = useState('');
    const [specification, setSpecification] = useState(''); 

    const submitHandler = (e) => {
        e.preventDefault();
        console.log({ srNo, workCategory, subCategory, planType, unit, totalSqft, quantityMultiplier, rate, specification });
        
        axios.post('https://sheet.best/api/sheets/6b4948f8-5b16-4368-8c45-3cde07bdb8af',{srNo,
            workCategory,
            subCategory,
            planType,
            unit,
            totalSqft,
            quantityMultiplier,
            rate,
            specification})
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.error(error);
        })
    }

    return (
        <Container fluid className="container">
            <Header as='h2'>New estimator using React</Header>
            <Form className='form' onSubmit={submitHandler}>
                <Form.Field>
                    <label>Sr No</label>
                    <input value={srNo} name='Sr no' onChange={(e) => setSrNo(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Work Category</label>
                    <input value={workCategory} name='work category' onChange={(e) => setWorkCategory(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Sub-category</label>
                    <input value={subCategory} name='sub category' onChange={(e) => setSubCategory(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Plan Type</label>
                    <input value={planType} name='plan type' onChange={(e) => setPlanType(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Unit</label>
                    <input value={unit} name='unit' onChange={(e) => setUnit(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Total sqft</label>
                    <input value={totalSqft} name='Total sqft' onChange={(e) => setTotalSqft(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Quantity Multiplier</label>
                    <input value={quantityMultiplier} name='Quantity Multiplier' onChange={(e) => setQuantityMultiplier(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Rate</label>
                    <input value={rate} name='rate' onChange={(e) => setRate(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Price</label>
                    <input value={price} name='price' onChange={(e) => setPrice(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Specification</label>
                    <input value={specification} name='specification' onChange={(e) => setSpecification(e.target.value)} />
                </Form.Field>
                <Button color='blue' type='submit'>Submit</Button>
            </Form>
        </Container>
    );
}

export default GoogleSheetDataF;
