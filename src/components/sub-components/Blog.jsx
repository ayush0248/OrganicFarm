import React from 'react';
import '../../styles/sub-style/Blog.css'; // Import the CSS file
import RF from '../../assets/img/SOT.jpg'
 // Replace with your image path
const BlogPage = () => {
  return (
    <div className="blog-container">
      <div className="blog-entry">
        <div className="blog-header">
          <h3>TITLE HEADING</h3>
          <h5>Title description, <span className="opacity">May 2, 2016</span></h5>
        </div>
        <div className="blog-content">
          <img src={RF} alt="Girl Hat" className="blog-image" />
          <p><strong>More Hats!</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae...</p>
          <div className="blog-actions">
            <button className="like-button"><b><i className="fa fa-thumbs-up"></i> Like</b></button>
            <button className="reply-button"><b>Replies </b><span className="reply-count">1</span></button>
          </div>
          <div className="replies" id="demo1">
            <hr />
            <div className="reply">
              <img src={RF} alt="Avatar" className="reply-avatar" />
              <div>
                <h4>George <span className="opacity">May 3, 2015, 6:32 PM</span></h4>
                <p>Great blog post! Following</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Repeat the blog-entry div as needed */}
    </div>
  );
}

export default BlogPage;
