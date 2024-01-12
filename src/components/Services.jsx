import React, { useEffect, useState } from "react";

function Services() {
  const [services, setServices] = useState([]);
  const [sortedProperty, setSortedProperty] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  function handleDelete(id) {
    fetch(`http://localhost:3000/services/${id}`, {
      method: "DELETE",
    }).then(() =>
      setServices((prev) => prev.filter((service) => service._id !== id))
    );
  }

  return (
    <section className="services">
      <h1>Our Services</h1>
      <div className="buttons">
        <button onClick={() => setSortedProperty(null)}>Default</button>
        <button
          onClick={() => setSortedProperty({ property: "title", asc: true })}
        >
          A-Z
        </button>
        <button
          onClick={() => setSortedProperty({ property: "title", asc: false })}
        >
          Z-A
        </button>
      </div>
      <div className="cards">
        {services &&
          [...services]
            .sort((a, b) => {
              if (sortedProperty && sortedProperty.asc) {
                return a[sortedProperty.property].toLowerCase() > b[sortedProperty.property].toLowerCase()
                  ? 1
                  : b[sortedProperty.property].toLowerCase() > a[sortedProperty.property].toLowerCase()
                  ? -1
                  : 0;
              } else if (sortedProperty && sortedProperty.asc === false) {
                return a[sortedProperty.property].toLowerCase() < b[sortedProperty.property].toLowerCase()
                  ? 1
                  : b[sortedProperty.property].toLowerCase() < a[sortedProperty.property].toLowerCase()
                  ? -1
                  : 0;
              }else{
                return 0
              }  
            })
            .map((x) => (
              <div className="card" key={x._id}>
                <i className={x.icon}></i>
                <h3>{x.title}</h3>
                <p>{x.description}</p>
                <button onClick={() => handleDelete(x._id)}>delete</button>
              </div>
            ))}
      </div>
    </section>
  );
}

export default Services;
