import React from 'react';

const styles = {
    color: "white",
    backgroundColor: "black"
  };

const List = (props) => {
    return (
        <div style={styles}>
            <h3>Liste des tâches :</h3>
            <p>{props.tasks.join(", ")}</p>
        </div>
    );
};

export default List;