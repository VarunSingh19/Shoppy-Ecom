import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Checkout = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location || { state: { finalTotal: 0, discount: 0, total: 0 } };
    const { finalTotal, discount, total } = state;


    const [formData, setFormData] = useState({
        fullName: '',
        flatNumber: '',
        buildingNumber: '',
        landmark: '',
        city: '',
        state: '',
        phoneNumber: '',
        queryMessage: '',
        pincode : '',
    });
    const cities = [
        'Mumbai',
        'Pune',
        'Nagpur',
        'Nashik',
        'Aurangabad',
        'Solapur',
        'Amravati',
        'Kolhapur',
        'Navi Mumbai',
        'Thane',
        'Akola',
        'Jalgaon',
        'Latur',
        'Ahmednagar',
        'Chandrapur',
        'Dhule',
        'Ichalkaranji',
        'Sangli',
        'Jalna',
        'Beed',
        'Parbhani',
        'Osmanabad',
        'Nanded',
        'Satara',
        'Ratnagiri',
        'Sindhudurg',
        'Palghar',
        'Wardha',
        'Yavatmal',
        'Hingoli',
        'Gondia',
        'Washim',
        'Buldana',
        'Gadchiroli',
        'Mumbai Suburban',
        'Raigad',
        'Ratnagiri',
        'Sindhudurg',
        'Palghar',
        'Bid',
        'Buldana',
        'Gadchiroli',
        'Wardha',
        'Washim',
        'Gondia',
        'Hingoli',
        'Nandurbar',
        'Usmanabad',
        'Kolaba'
    ]; 
    const states = ['Maharashtra']; 

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Order Placed Successfully... :)');
        localStorage.removeItem('cart');
        console.log('Form submitted:', formData);
        setTimeout(() => {
            navigate('/products');
        }, 2000);
    };
    

    return (
        <div className="container mx-auto mt-10">
            <div className="w-auto mx-5">
                <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder='enter your fullname here'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="flatNumber" className="block text-sm font-medium text-gray-600">
                            Flat Number
                        </label>
                        <input
                            type="text"
                            id="flatNumber"
                            name="flatNumber"
                            value={formData.flatNumber}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder='enter your flat number here'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="buildingNumber" className="block text-sm font-medium text-gray-600">
                            Building Number/Name
                        </label>
                        <input
                            type="text"
                            id="buildingNumber"
                            name="buildingNumber"
                            value={formData.buildingNumber}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder='enter your building number here'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="landmark" className="block text-sm font-medium text-gray-600">
                            Landmark
                        </label>
                        <input
                            type="text"
                            id="landmark"
                            name="landmark"
                            value={formData.landmark}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder='enter your landmark here'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="pincode" className="block text-sm font-medium text-gray-600">
                            Pincode
                        </label>
                        <input
                            type="text"
                            id="pincode"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder='enter your landmark here'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-600">
                            City
                        </label>
                        <select
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        >
                            <option value="" disabled>Select your city</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="state" className="block text-sm font-medium text-gray-600">
                            State
                        </label>
                        <select
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        >
                            <option value="" disabled>Select your state</option>
                            {states.map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder='enter your phone number here'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="queryMessage" className="block text-sm font-medium text-gray-600">
                            Any Query (Optional)
                        </label>
                        <textarea
                            id="queryMessage"
                            name="queryMessage"
                            value={formData.queryMessage}
                            onChange={handleChange}
                            rows="4"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder='enter your query here'
                        />
                    </div>
                    <div className="border-t mt-8 pt-4">
                        <div className="flex font-semibold justify-between py-2 text-sm uppercase">
                            <span>Total cost</span>
                            <span>${(total - discount + 10).toFixed(2)}</span>
                        </div>
                        <>
                            <ToastContainer/>
                        <button
                            type="submit"
                            className="bg-[#00B377] font-semibold hover:bg-[#006633] py-3 text-sm text-white uppercase w-full mb-5"
                            >
                            Place Order
                        </button>
                            </>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
