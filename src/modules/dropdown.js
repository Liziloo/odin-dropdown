export { dropdownMenu };

const dropdownMenu = () => {
    const dropdownHeader = document.querySelector('.dropdown-header');
    const dropdownList = document.querySelector('.dropdown-list');

    dropdownList.hidden = true;

    dropdownHeader.addEventListener('click', () => {
        if (!dropdownList.hidden === true) {
            dropdownList.hidden = true;
        } else {
            dropdownList.hidden = false;
        }
    })
}