import { Link } from 'react-router-dom';

const News = ({ news }) => {
    const { _id, image_url, title, details } = news; 

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image_url} alt="News" />
            </figure>
            <h2 className="card-title">{title}</h2>
            {
                details.length > 150 ? (
                    <>
                        <p>{details.slice(0, 150)}</p>
                        <Link to={`/news/${_id}`}><button className='btn btn-primary'>Read More</button></Link>
                    </>
                ) : (
                    <p>{details}</p>
                )
            }
        </div>
    );
};

export default News;
