import { useState } from 'react'

const formInputStyle = 'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
const formInputLabelStyle = 'absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
const formSelectStyle = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
const formSelectLabelStyle ='block mb-2 text-sm font-medium text-gray-900 dark:text-white'


const TicketPage = () => {

    const [formData, setFormData] = useState({
        status: 'not started',
        progress: 0,
        timestamp: new Date().toISOString()
    })

    const editMode = false
    const handleSubmit = () => {
        console.log('Ticket submitted')
    }

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
            })
        )
    }

    const categories = ['test1', 'test2']

    console.log(formData)

    return (
        <div className="p-5 w-3/5">
            <h1 className="font-light text-2xl">{editMode ? 'Update your ticket' : 'Create a ticket'}</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <section className="flex flex-col justify-start items-start gap-4 py-2 ">
                        <div className="relative w-full z-0 ">
                            <input
                                id="title"
                                name="title"
                                type="text"
                                placeholder=" "
                                onChange={handleChange}
                                required={true}
                                value={formData.title}
                                className={formInputStyle}
                            />
                            <label
                            htmlFor="title"
                            className={formInputLabelStyle}
                            >
                                Title
                            </label>
                        </div>
                        <div className="relative z-0 w-full">
                            <input
                                id="description"
                                name="description"
                                type="text"
                                placeholder=" "
                                onChange={handleChange}
                                required={true}
                                value={formData.description}
                                className={formInputStyle}
                            />
                            <label
                                htmlFor="description"
                                className={formInputLabelStyle}
                            >
                                Description
                            </label>
                        </div>
                        <label
                        className={formSelectLabelStyle}
                        >
                            Category
                        </label>
                        <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className={formSelectStyle}
                        >
                            {categories?.map((category, _index) => (
                                <option value={category} key={_index}>{category}</option>
                            ))}
                        </select>
                        <div className="relative z-0 w-full">
                            <input
                                id="new-category"
                                name="category"
                                type="text"
                                placeholder=" "
                                onChange={handleChange}
                                required={true}
                                value={formData.category}
                                className={formInputStyle}
                            />
                            <label
                            htmlFor="new-category"
                            className={formInputLabelStyle}
                            >
                                New Category
                            </label>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default TicketPage