// document.addEventListener("DOMContentLoaded", function () {
//     // Hiệu ứng loading
//     const loadingScreen = document.querySelector(".loading-screen");
//     setTimeout(() => {
//       loadingScreen.classList.add("fade-out");
//     }, 500);
  
//     // Tạo các tia sáng (rays) cho hiệu ứng loading
//     const raysSvg = document.getElementById("rays-svg");
  
//     // Tia sáng bên ngoài
//     for (let i = 0; i < 60; i++) {
//       const angle = (i * 6 * Math.PI) / 180;
//       const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  
//       const x1 = 120;
//       const y1 = 120;
//       const x2 = 120 + 110 * Math.cos(angle);
//       const y2 = 120 + 110 * Math.sin(angle);
  
//       line.setAttribute("x1", x1);
//       line.setAttribute("y1", y1);
//       line.setAttribute("x2", x2);
//       line.setAttribute("y2", y2);
//       line.setAttribute("stroke", "rgba(255, 255, 255, 0.3)");
//       line.setAttribute("stroke-width", "1");
  
//       raysSvg.appendChild(line);
//     }
//     window.addEventListener("scroll", revealOnScroll);
//     revealOnScroll();
//     // Tia sáng ở giữa
//     for (let i = 0; i < 36; i++) {
//       const angle = (i * 10 * Math.PI) / 180;
//       const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  
//       const x1 = 120;
//       const y1 = 120;
//       const x2 = 120 + 80 * Math.cos(angle);
//       const y2 = 120 + 80 * Math.sin(angle);
  
//       line.setAttribute("x1", x1);
//       line.setAttribute("y1", y1);
//       line.setAttribute("x2", x2);
//       line.setAttribute("y2", y2);
//       line.setAttribute("stroke", "rgba(255, 255, 255, 0.5)");
//       line.setAttribute("stroke-width", "1.5");
  
//       raysSvg.appendChild(line);
//     }
  
//     // Tia sáng bên trong
//     for (let i = 0; i < 20; i++) {
//       const angle = (i * 18 * Math.PI) / 180;
//       const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  
//       const x1 = 120;
//       const y1 = 120;
//       const x2 = 120 + 60 * Math.cos(angle);
//       const y2 = 120 + 60 * Math.sin(angle);
  
//       line.setAttribute("x1", x1);
//       line.setAttribute("y1", y1);
//       line.setAttribute("x2", x2);
//       line.setAttribute("y2", y2);
//       line.setAttribute("stroke", "rgba(255, 255, 255, 0.7)");
//       line.setAttribute("stroke-width", "2");
  
//       raysSvg.appendChild(line);
//     }
//     //Hiệu ứng xuất hiện khi cuộn
//     function revealOnScroll() {
//       let elements = document.querySelectorAll(".reveal");
  
//       elements.forEach((element) => {
//         let position = element.getBoundingClientRect().top;
//         let windowHeight = window.innerHeight;
  
//         if (position < windowHeight - 50) {
//           // Xuất hiện khi còn cách đáy màn hình 50px
//           element.classList.add("visible");
//         } else {
//           element.classList.remove("visible");
//         }
//       });
//     }
//     window.addEventListener("scroll", revealOnScroll);
//     revealOnScroll();
  
//     // Cuộn mượt đến phần About
//     function scrollToAbout() {
//       let aboutSection = document.getElementById("about");
//       if (!aboutSection) {
//         console.error("Không tìm thấy phần About.");
//         return;
//       }
//       let targetPosition =
//         aboutSection.getBoundingClientRect().top + window.scrollY;
//       let startPosition = window.scrollY;
//       let distance = targetPosition - startPosition;
//       let duration = 1500;
//       let startTime = null;
  
//       function animationScroll(currentTime) {
//         if (startTime === null) startTime = currentTime;
//         let timeElapsed = currentTime - startTime;
//         let progress = Math.min(timeElapsed / duration, 1);
//         window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
//         if (timeElapsed < duration) {
//           requestAnimationFrame(animationScroll);
//         }
  
//         function easeInOutQuad(t) {
//           return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
//         }
//         requestAnimationFrame(animationScroll);
//       }
//       globeContainer.appendChild(svg);
//     }
  
//     // Con trỏ tùy chỉnh
//     const cursor = document.querySelector(".custom-cursor");
//     const links = document.querySelectorAll("a, button");
  
//     document.addEventListener("mousemove", (e) => {
//       cursor.classList.add("active");
//       cursor.style.left = e.clientX + "px";
//       cursor.style.top = e.clientY + "px";
//     });
  
//     document.addEventListener("mouseleave", () => {
//       cursor.classList.remove("active");
//     });
  
//     links.forEach((link) => {
//       link.addEventListener("mouseenter", () => {
//         cursor.classList.add("hover");
//       });
  
//       link.addEventListener("mouseleave", () => {
//         cursor.classList.remove("hover");
//       });
//     });
  
//     // Hiệu ứng khi cuộn
//     function revealElements() {
//       const revealElements = document.querySelectorAll(".reveal, .leftto, .rightto");
//       const windowHeight = window.innerHeight;
//       const elementVisible = 150;
  
//       revealElements.forEach((element) => {
//           const elementTop = element.getBoundingClientRect().top;
  
//           if (elementTop < windowHeight - elementVisible) {
//               element.classList.add("active");
//           } else {
//               element.classList.remove("active");
//           }
//       });
//   }
  
//   document.addEventListener("DOMContentLoaded", () => {
//       revealElements(); 
//   });
  
//   window.addEventListener("scroll", revealElements); 
  
//     // Sticky navigation and active section tracking
//     function handleScroll() {
//       const scrollPosition = window.scrollY;
  
//       // Show/hide sticky nav
//       const stickyNav = document.querySelector(".sticky-nav");
//       if (scrollPosition > 100) {
//         stickyNav.classList.add("visible");
//       } else {
//         stickyNav.classList.remove("visible");
//       }
  
//       // Update active section in sidebar
//       const sections = document.querySelectorAll("section");
//       const navLinks = document.querySelectorAll(".nav-link");
  
//       let current = "";
  
//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
  
//         if (scrollPosition >= sectionTop - 200) {
//           current = section.getAttribute("id");
//         }
//       });
  
//       navLinks.forEach((link) => {
//         link.classList.remove("active");
//         if (link.getAttribute("href") === `#${current}`) {
//           link.classList.add("active");
//         }
//       });
  
//       // Run reveal function
//       revealElements();
//     }
  
//     // Parallax effect
//     function handleMouseMove(e) {
//       const parallaxElements = document.querySelectorAll(".parallax");
//       const mouseX = e.clientX;
//       const mouseY = e.clientY;
  
//       parallaxElements.forEach((element) => {
//         const speedX = element.getAttribute("data-speed-x") || 0.01;
//         const speedY = element.getAttribute("data-speed-y") || 0.01;
  
//         const x = (window.innerWidth / 2 - mouseX) * speedX;
//         const y = (window.innerHeight / 2 - mouseY) * speedY;
  
//         element.style.transform = `translate(${x}px, ${y}px)`;
//       });
//     }
  
//     // // Books section functionality
//     // const mockBooks = [
//     //   {
//     //     id: 1,
//     //     title: "Design as Art",
//     //     author: "Bruno Munari",
//     //     category: "Graphic Design",
//     //     image:
//     //       "https://lovable.ai/uploads/d15738a9-4e68-422e-813b-4f7be8d33bb5.png",
//     //     price: "$15.00",
//     //   },
//     //   {
//     //     id: 2,
//     //     title: "Visions of the Bauhaus Books",
//     //     author: "Lars Müller",
//     //     category: "Art & Culture",
//     //     image:
//     //       "https://lovable.ai/uploads/78885085-38ef-4886-b87f-c57ac525f2c0.png",
//     //     price: "$29.00",
//     //   },
//     //   {
//     //     id: 3,
//     //     title: "Visions of the Bauhaus Books",
//     //     author: "Alain Botton",
//     //     category: "Applied Arts",
//     //     image:
//     //       "https://lovable.ai/uploads/8d11bb32-b9d7-4cb3-855e-f91446f58465.png",
//     //     price: "$23.99",
//     //   },
//     //   {
//     //     id: 4,
//     //     title: "Color Theory",
//     //     author: "Johannes Itten",
//     //     category: "Art & Photography",
//     //     image:
//     //       "https://lovable.ai/uploads/78885085-38ef-4886-b87f-c57ac525f2c0.png",
//     //     price: "$19.95",
//     //   },
//     //   {
//     //     id: 5,
//     //     title: "Mastering the Art of French Cooking",
//     //     author: "Julia Child",
//     //     category: "Food & Beverage",
//     //     image:
//     //       "https://lovable.ai/uploads/d15738a9-4e68-422e-813b-4f7be8d33bb5.png",
//     //     price: "$45.00",
//     //   },
//     //   {
//     //     id: 6,
//     //     title: "Pattern Design: Principles and Applications",
//     //     author: "William Morris",
//     //     category: "Interior & Architecture",
//     //     image:
//     //       "https://lovable.ai/uploads/8d11bb32-b9d7-4cb3-855e-f91446f58465.png",
//     //     price: "$32.50",
//     //   },
//     //   {
//     //     id: 7,
//     //     title: "Visual Communication Design",
//     //     author: "Paul Rand",
//     //     category: "Graphic Design",
//     //     image:
//     //       "https://lovable.ai/uploads/78885085-38ef-4886-b87f-c57ac525f2c0.png",
//     //     price: "$27.99",
//     //   },
//     //   {
//     //     id: 8,
//     //     title: "The Elements of Typography",
//     //     author: "Robert Bringhurst",
//     //     category: "Digital Printing",
//     //     image:
//     //       "https://lovable.ai/uploads/d15738a9-4e68-422e-813b-4f7be8d33bb5.png",
//     //     price: "$22.00",
//     //   },
//     //   {
//     //     id: 9,
//     //     title: "The Art of Color and Composition",
//     //     author: "Wassily Kandinsky",
//     //     category: "Photo / Essays / Events",
//     //     image:
//     //       "https://lovable.ai/uploads/8d11bb32-b9d7-4cb3-855e-f91446f58465.png",
//     //     price: "$18.75",
//     //   },
//     // ];
  
//     // let currentBooks = [...mockBooks];
//     // let currentPage = 1;
//     // const booksPerPage = 6;
  
//     // function renderBooks() {
//     //   const booksGrid = document.getElementById("books-grid");
//     //   if (!booksGrid) return;
  
//     //   booksGrid.innerHTML = "";
  
//     //   const startIndex = (currentPage - 1) * booksPerPage;
//     //   const paginatedBooks = currentBooks.slice(
//     //     startIndex,
//     //     startIndex + booksPerPage
//     //   );
  
//     //   paginatedBooks.forEach((book) => {
//     //     const bookCard = document.createElement("div");
//     //     bookCard.className = "book-card";
  
//     //     bookCard.innerHTML = `
//     //         <div class="book-img-container">
//     //           <img src="${book.image}" alt="${book.title}" class="book-img">
//     //         </div>
//     //         <div class="book-info">
//     //           <h3 class="book-title">${book.title}</h3>
//     //           <p class="book-author">${book.author}</p>
//     //           <p class="book-category">${book.category}</p>
//     //           <p class="book-price">${book.price}</p>
//     //         </div>
//     //       `;
  
//     //     booksGrid.appendChild(bookCard);
//     //   });
  
//     //   renderPagination();
//     // }
  
//     // function renderPagination() {
//     //   const pagination = document.getElementById("books-pagination");
//     //   if (!pagination) return;
  
//     //   pagination.innerHTML = "";
  
//     //   const totalPages = Math.ceil(currentBooks.length / booksPerPage);
  
//     //   for (let i = 1; i <= totalPages; i++) {
//     //     const pageItem = document.createElement("div");
//     //     pageItem.className = `pagination-item${
//     //       i === currentPage ? " active" : ""
//     //     }`;
//     //     pageItem.textContent = i;
  
//     //     pageItem.addEventListener("click", () => {
//     //       currentPage = i;
//     //       renderBooks();
//     //     });
  
//     //     pagination.appendChild(pageItem);
//     //   }
//     // }
  
//     // function filterBooks() {
//     //   const searchInput = document.getElementById("search-input");
//     //   const categorySelect = document.getElementById("category-select");
//     //   const sortSelect = document.getElementById("sort-select");
  
//     //   if (!searchInput || !categorySelect || !sortSelect) return;
  
//     //   const searchQuery = searchInput.value.toLowerCase();
//     //   const selectedCategory = categorySelect.value;
//     //   const sortBy = sortSelect.value;
  
//     //   // Filter by search and category
//     //   currentBooks = mockBooks.filter((book) => {
//     //     const matchesSearch =
//     //       book.title.toLowerCase().includes(searchQuery) ||
//     //       book.author.toLowerCase().includes(searchQuery) ||
//     //       book.category.toLowerCase().includes(searchQuery);
  
//     //     const matchesCategory =
//     //       selectedCategory === "" || book.category === selectedCategory;
  
//     //     return matchesSearch && matchesCategory;
//     //   });
  
//     //   // Sort books
//     //   if (sortBy === "title") {
//     //     currentBooks.sort((a, b) => a.title.localeCompare(b.title));
//     //   } else if (sortBy === "price-low") {
//     //     currentBooks.sort(
//     //       (a, b) =>
//     //         parseFloat(a.price.replace("$", "")) -
//     //         parseFloat(b.price.replace("$", ""))
//     //     );
//     //   } else if (sortBy === "price-high") {
//     //     currentBooks.sort(
//     //       (a, b) =>
//     //         parseFloat(b.price.replace("$", "")) -
//     //         parseFloat(a.price.replace("$", ""))
//     //     );
//     //   }
  
//     //   currentPage = 1;
//     //   renderBooks();
//     // }
  
//     // // Initialize books section
//     // renderBooks();
  
//     // // Add event listeners for filters
//     // const searchInput = document.getElementById("search-input");
//     // const categorySelect = document.getElementById("category-select");
//     // const sortSelect = document.getElementById("sort-select");
  
//     // if (searchInput) {
//     //   searchInput.addEventListener("input", filterBooks);
//     // }
  
//     // if (categorySelect) {
//     //   categorySelect.addEventListener("change", filterBooks);
//     // }
  
//     // if (sortSelect) {
//     //   sortSelect.addEventListener("change", filterBooks);
//     // }
  
//     // // Smooth scroll for anchor links
//     // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     //   anchor.addEventListener("click", function (e) {
//     //     e.preventDefault();
  
//     //     const targetId = this.getAttribute("href");
//     //     const targetElement = document.querySelector(targetId);
  
//     //     if (targetElement) {
//     //       targetElement.scrollIntoView({ behavior: "smooth" });
//     //     }
//     //   });
//     // });
  
//     // // Add event listeners
//     // window.addEventListener("scroll", handleScroll);
//     // document.addEventListener("mousemove", handleMouseMove);
  
//     // // Initialize the scroll handler once to set the correct active state
//     // handleScroll();
//   });
//   let isScrolling = false;
//   let scrollAmount = 0;
  
//   window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   };
//   // Cuộn trang bằng chuột
//   function smoothScroll() {
//     if (Math.abs(scrollAmount) > 0.5) {
//       window.scrollBy(0, scrollAmount * 0.17);
//       scrollAmount *= 0.97;
//       requestAnimationFrame(smoothScroll);
//     } else {
//       isScrolling = false;
//     }
//   }
  
//   document.addEventListener(
//     "wheel",
//     (event) => {
//       event.preventDefault();
//       if (!isScrolling) {
//         isScrolling = true;
//         scrollAmount = event.deltaY;
//         requestAnimationFrame(smoothScroll);
//       } else {
//         scrollAmount += event.deltaY * 0.5;
//       }
//     },
//     { passive: false }
//   );
  