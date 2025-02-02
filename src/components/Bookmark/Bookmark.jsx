import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {post_headline} = bookmark
    return (
        <div className='p-4'>
            <h4 className="text-2xl bg-blue-300 p-4 rounded-xl">{post_headline}</h4>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}

export default Bookmark;