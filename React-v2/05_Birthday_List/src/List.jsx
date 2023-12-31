import React from "react";

const List = (props) => {
  const { People } = props;
  return (
    <div>
      {People.map((person) => {
        const { id, name, image, age } = person;
        return (
          <article className="person" key={id}>
            <img src={image} alt="profile image" />
            <div>
              <h4>{name}</h4>
              <p>{age} Years Old</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
