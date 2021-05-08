import React, { useState, Fragment } from 'react';
import '../form/Form.css';

const Form = () => {

    const [data, setData] = useState({                          // - Status of my component
        num1: 0,
        num2: 0,
        op: '+',
    })

    const [result, setResult] = useState(0)                 // - Status of the fetch result

    const handleInputChange = (event) => {                  // - I get the input values and set them in their state
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    const sendData = async (event) => {                     // - Function to send the form data to my API and receive a response
        event.preventDefault();
        try {

            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }

            let res = await fetch(`http://localhost:8000/${data.num1}/${data.op}/${data.num2}`, config)
            let json = await res.json()

            setResult(Object.values(json)[0])

        } catch (error) {
            console.log(error)
        }
    }

    return (                                                            //- form component
        <Fragment>
            <form id="form-body" className="row" onSubmit={sendData}>

                <div className="col-md-12 p-3">
                    <h3>{data.num1} {data.op} {data.num2} = {result} </h3>
                    <label>
                        Ingrese el segundo operando
                    <input
                            placeholder="Ingrese un numero"
                            className="form-control text-center"
                            type="number"
                            name="num1"
                            required={true}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>

                <div className="col-md-12 p-3">
                    <label>
                        Ingrese el segundo operando
                    <input
                            placeholder="Ingrese un numero"
                            className="form-control text-center"
                            type="number"
                            name="num2"
                            required={true}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>

                <div className="col-md-12 p-3">
                    <label>
                        Seleccione el operador:
                        <select
                            className="form-control form-select"
                            name="op"
                            value={data.value}
                            defaultChecked={true}
                            onChange={handleInputChange}
                        >
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">*</option>
                            <option value=":">/</option>
                        </select>
                    </label>

                </div>

                <div className="col-md-12 p-3">
                    <button className="btn btn-outline-light" type="submit">Enviar</button>
                </div>

            </form>
        </Fragment>

    );
}

export default Form;




