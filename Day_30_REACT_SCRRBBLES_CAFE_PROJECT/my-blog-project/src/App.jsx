import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookmarked, setBookMared] = useState([]);
  const [readingCount, setReadingCount] = useState(0);

  const handleBookMark = (blog) => {
    setBookMared([...bookmarked, blog])
  }

  const handleMarkAsRead = (time, id) => {
    const newTime = readingCount + time;
    setReadingCount(newTime);
    handleRemoveFormBookmark(id)
  }

  const handleRemoveFormBookmark = (id) => {
    const remainingBookMark = bookmarked.filter((mark) => mark.id !== id);
    setBookMared(remainingBookMark);
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left Section */}
          <div className="lg:col-span-10">
            <Blogs
              handleBookMark={handleBookMark}
              handleMarkAsRead={handleMarkAsRead}
            />
          </div>

          {/* Right Section */}
          <div className="lg:col-span-2 space-y-4">

            {/* Reading Time Card */}
            <div className="card bg-base-100 shadow-md border">
              <div className="card-body p-4">
                <h2 className="text-lg font-semibold text-primary">
                  Reading Time
                </h2>
                <p className="text-2xl font-bold">
                  {readingCount} min
                </p>
              </div>
            </div>

            {/* Bookmark Card */}
            <div className="card bg-base-100 shadow-md border">
              <div className="card-body p-4">
                <h2 className="text-lg font-semibold text-secondary mb-2">
                  Bookmarked Blogs ({bookmarked.length})
                </h2>

                <div className="space-y-2">
                  {
                    bookmarked.map((marked) => (
                      <p
                        key={marked.id}
                        className="bg-secondary text-secondary-content px-3 py-2 rounded-lg font-medium"
                      >
                        {marked.title}
                      </p>
                    ))
                  }
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
