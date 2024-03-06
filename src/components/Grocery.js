import backgroundImage from "../../public/pexels-karolina-grabowska-4033110.jpg";

const Grocery = () => {

    const backgroundImageStyle = {
        // backgroundImage: 'url("https://images.pexels.com/photos/4033110/pexels-photo-4033110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '85vh'
    };

    return (
        <div className="text-3xl font-semibold" style={backgroundImageStyle}>
            <h1 className="p-6 text-center">Welcome to our Grocery, We have a huge Grocery Mart</h1>
        </div>
    )
};

export default Grocery;
