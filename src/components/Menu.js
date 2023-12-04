import React from "react";
import Food from "../food";
import Swal from "sweetalert2";

const Menu = () => {
  const handleOrder = (id) => {
    console.log(id);

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Do you want to confirm order?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: false,
        confirmButtonText: "Yes, order it!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Orderd!",
            "Your order has been confirmed.",
            "success"
          );
        }
      });
  };
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks specials!</h2>
        <button>Our Menu</button>
      </div>
      <div className="cards">
        {Food.map((food) => (
          <div key={food.id} className="menu-items">
            <img src={food.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h3>{food.title}</h3>
                <p>${food.price}</p>
              </div>
              <p>{food.description}</p>
              <button className="orderbtn" onClick={() => handleOrder(food.id)}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
