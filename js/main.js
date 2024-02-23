
const toggle = document.querySelector('.slider.round');
const hero = document.querySelector('.hero');
const main = document.querySelector('.main');
const media = document.querySelector('.social-media-section');
const headert = document.querySelector('.overview-header');
const items = document.querySelector('.overview-section');

toggle.addEventListener('click', () => {
    hero.classList.toggle('dark');
    main.classList.toggle('dark');
    media.classList.toggle('dark');
    headert.classList.toggle('dark');
    items.classList.toggle('dark');
})

// var cartona;
// function AddRecord(){
//     cartona+=`
//     <tr>
//     <td>#5033</td>
//     <td>
//         <div class="client">
//            <div class="client-img bg-img" style="background-image: url(images/3.jpeg)"></div>
//             <div class="client-info">
//                 <h4>Bella </h4>
//                 <small>bella@gmail.com</small>
//             </div>
//         </div> </td>
//     <td> $317</td>
//     <td>19 April, 2022</td>
//     <td>-$205</td>
//     <td>
//         <div class="actions">
//             <span class="lab la-telegram-plane"></span>
//             <span class="las la-eye"></span>
//             <span class="las la-ellipsis-v"></span>
//         </div>
//     </td>
// </tr>
    
    
//     `


//     document.getElementById('demo').innerHTML=cartona
// }

    