async function fetchComments() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/1');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const comments = await response.json();
    return comments;
  } catch (error) {
    console.error('Error fetching comments:', error.message);
    throw error;
  }
}

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    throw error;
  }
}

fetchComments()
  .then(comments => {
    console.log('Comments:', comments);
  })
  .catch(error => {
    console.error('Error in fetchComments:', error.message);
  });

fetchPosts()
  .then(posts => {
    console.log('Posts:', posts);
  })
  .catch(error => {
    console.error('Error in fetchPosts:', error.message);
  });
