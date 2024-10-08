// document.addEventListener("DOMContentLoaded", function() {
//     const trackInput = document.getElementById('track');
//     const trackContainer = trackInput.parentNode;

//     function checkInput() {
//         if (trackInput.value.trim() !== '') {
//             trackContainer.classList.add('filled');
//         } else {
//             trackContainer.classList.remove('filled');
//         }
//     }

//     checkInput();


//     trackInput.addEventListener('input', checkInput);
// });



document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const threshold = 88;
    let isFixed = false;

    function handleScroll() {
        if (window.scrollY >= threshold && !isFixed) {
            header.classList.add('fixed');
            isFixed = true;
        } else if (window.scrollY < threshold && isFixed) {
            header.classList.remove('fixed');
            isFixed = false;
        }
    }

    window.addEventListener('scroll', handleScroll);
});





// JavaScript for scroll button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     var scrollButton = document.getElementById("scroll__btn");
//     var scrollHeight = document.documentElement.scrollHeight;
//     var clientHeight = document.documentElement.clientHeight;
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

//     if (scrollTop > 0.1 * (scrollHeight - clientHeight)) {
//         scrollButton.classList.add("show");
//     } else {
//         scrollButton.classList.remove("show");
//     }
// }

// document.getElementById('scroll__btn').onclick = function() {
//     scrollToTop();
// };

// function scrollToTop() {
//     document.body.scrollTop = 0; 
//     document.documentElement.scrollTop = 0;
// }


const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    const icon = question.querySelector('.icon'); // Icon ko select karo
    const answer = question.nextElementSibling; // 'question' ke baad wala sibling 'answer' ko select karo

    question.addEventListener("click", () => {
        if (icon.classList.contains('active')) {
            icon.classList.remove('active'); // Active class hatao
            answer.style.maxHeight = null; // 'answer' ka height remove karo
            console.log( " removed");
        } else {
            icon.classList.add('active'); // Active class add karo
            answer.style.maxHeight = answer.scrollHeight + "px"; // 'answer' ka height set karo
            console.log( " added");
        }
    });
});



const selectedAll = document.querySelectorAll(".wrapper-dropdown");

selectedAll.forEach((selected) => {
  const optionsContainer = selected.children[2];
  const optionsList = selected.querySelectorAll("div.wrapper-dropdown li");

  selected.addEventListener("click", () => {
    let arrow = selected.children[1];

    if (selected.classList.contains("active")) {
      handleDropdown(selected, arrow, false);
    } else {
      let currentActive = document.querySelector(".wrapper-dropdown.active");

      if (currentActive) {
        let anotherArrow = currentActive.children[1];
        handleDropdown(currentActive, anotherArrow, false);
      }

      handleDropdown(selected, arrow, true);
    }
  });



  // update the display of the dropdown
  for (let o of optionsList) {
    o.addEventListener("click", () => {
      selected.querySelector(".selected-display").innerHTML = o.innerHTML;
    });
  }
});

// check if anything else ofther than the dropdown is clicked
window.addEventListener("click", function (e) {
  if (e.target.closest(".wrapper-dropdown") === null) {
    closeAllDropdowns();
  }
});

// close all the dropdowns
function closeAllDropdowns() {
  const selectedAll = document.querySelectorAll(".wrapper-dropdown");
  selectedAll.forEach((selected) => {
    const optionsContainer = selected.children[2];
    let arrow = selected.children[1];

    handleDropdown(selected, arrow, false);
  });
}

// open all the dropdowns
function handleDropdown(dropdown, arrow, open) {
  if (open) {
    arrow.classList.add("rotated");
    dropdown.classList.add("active");
  } else {
    arrow.classList.remove("rotated");
    dropdown.classList.remove("active");
  }
}








function dropDownResert(){
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.getElementById('dropdown1');
  const destination = dropdown.querySelector('.selected-display');
  const dropdownItems = dropdown.querySelectorAll('.item');

  let initialSelectedValue = destination.textContent;

  dropdownItems.forEach(item => {
      item.addEventListener('click', function() {
          const selectedText = this.textContent;
          destination.textContent = selectedText;

          dropdownItems.forEach(item => {
              item.classList.remove('selected');
          });

          this.classList.add('selected');
      });
  });

  const resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', function() {
      destination.textContent = initialSelectedValue;

      dropdownItems.forEach(item => {
          item.classList.remove('selected');
      });

      dropdown.querySelector('.item').classList.add('selected');
  });
});





document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.getElementById('dropdown');
  const destination = dropdown.querySelector('.selected-display');
  const dropdownItems = dropdown.querySelectorAll('.item');

  let initialSelectedValue = destination.textContent;

  dropdownItems.forEach(item => {
      item.addEventListener('click', function() {
          const selectedText = this.textContent;
          destination.textContent = selectedText;

          dropdownItems.forEach(item => {
              item.classList.remove('selected');
          });

          this.classList.add('selected');
      });
  });

  const resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', function() {
      destination.textContent = initialSelectedValue;

      dropdownItems.forEach(item => {
          item.classList.remove('selected');
      });

      dropdown.querySelector('.item').classList.add('selected');
  });
});




document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.getElementById('dropdown2');
  const destination = dropdown.querySelector('.selected-display');
  const dropdownItems = dropdown.querySelectorAll('.item');

  let initialSelectedValue = destination.textContent;

  dropdownItems.forEach(item => {
      item.addEventListener('click', function() {
          const selectedText = this.textContent;
          destination.textContent = selectedText;

          dropdownItems.forEach(item => {
              item.classList.remove('selected');
          });

          this.classList.add('selected');
      });
  });

  const resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', function() {
      destination.textContent = initialSelectedValue;

      dropdownItems.forEach(item => {
          item.classList.remove('selected');
      });

      dropdown.querySelector('.item').classList.add('selected');
  });
});




document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.getElementById('dropdown3');
  const destination = dropdown.querySelector('.selected-display');
  const dropdownItems = dropdown.querySelectorAll('.item');


  let initialSelectedValue = destination.textContent;

  dropdownItems.forEach(item => {
      item.addEventListener('click', function() {
          const selectedText = this.textContent;
          destination.textContent = selectedText;

          dropdownItems.forEach(item => {
              item.classList.remove('selected');
          });

          this.classList.add('selected');
      });
  });

  const resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', function() {
      destination.textContent = initialSelectedValue;

      dropdownItems.forEach(item => {
          item.classList.remove('selected');
      });

      dropdown.querySelector('.item').classList.add('selected');
  });
});

}
dropDownResert();







const menuBtn = document.querySelectorAll( '.menu-btn' );
const closeBtn = document.querySelectorAll('.close-btn');
const navLinkks = document.querySelectorAll('header nav ul');

menuBtn.forEach(menuBtn => {
  menuBtn.addEventListener('click', () => {
    navLinkks.forEach(navLinkks => {
      navLinkks.classList.add('active');
    })
  })
})
closeBtn.forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    navLinkks.forEach(navLinkks => {
      navLinkks.classList.remove('active');
    })
  })
})