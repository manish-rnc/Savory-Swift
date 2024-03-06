const Contact = () => {
    return (
        <div className="m-4 p-4">
            <h1 className="m-2 font-bold text-2xl text-slate-700">Contact Us Page</h1>
            <form>
                <input type="text" placeholder="Enter name" className="p-2 border mb-2"></input><br></br>
                <input type="phone" placeholder="Enter phone" className="p-2 border mb-2"></input><br></br>
                <button className="p-2 border bg-slate-300 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;