import React from 'react'

function section() {
  return (
    <>
     {/* Search Start */}
  <div
  className="container-fluid bg-primary mb-5 wow fadeIn p-3 "
  data-wow-delay="0.1s"
  style={{ padding: 35 }}
>
  <div className="container">
    <div className="row g-3">
      <div className="col-md-15">
        <center>
          <div className="d-flex justify-content-between ">
            <div className="col-md-4 p-2 ">
              <h4>7,500 Plot Sold</h4>
            </div>
            <div
              style={{
                borderLeft: "2px dotted rgb(0, 0, 0)",
                height: 40,
                margin: 10
              }}
            />
            <div className="col-md-4 p-2">
              <h4>15 Years Experience</h4>
            </div>
            <div
              style={{
                borderLeft: "2px dotted rgb(0, 0, 0)",
                height: 40,
                margin: 10
              }}
            />
            <div className="col-md-4 p-2">
              <h4> 395 Projects Completed</h4>
            </div>
          </div>
        </center>
      </div>
    </div>
  </div>
</div>
{/* Search End */}
</>
  )
}

export default section