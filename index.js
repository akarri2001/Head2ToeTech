function scrollToTheProblem() {
    const element = document.getElementById('TheProblemSection')
    element.scrollIntoView({behavior: "smooth", block: "start"});
}




//product icon hover effect
const productIcons = document.querySelectorAll('.product_icon');
const productTextDiv = document.getElementById('product_section_text')

const hoverOverText = document.getElementById('hover_over_icon_text')

const iconToText = {
    'touch_icon': 'All Assessments One Touch Away',
    'bed_icon': 'Bedside Charting',
    'chat_icon': 'Touch and Speed2Text AI Assistant',
    'doc_icon': 'Chunk Documentation Into More Manageable Pieces',
    'data_icon': 'Swift Data Trasnfer to EHR Software',
    'bell_icon': 'Documentation and Clinical Reminders',
}

productIcons.forEach((iconObj) => {

    iconObj.addEventListener('mouseenter', () => {

        productTextDiv.removeChild(hoverOverText);

        let iconId = iconObj.id
        // console.log(iconId)
        let currText = iconToText[iconId]

        const h3Elem = document.createElement("h3");
        // h3Elem.setAttribute("class", "display-5");
        h3Elem.setAttribute('id', 'icon_text_value')
        h3Elem.style.color = 'var(--secondary-purple-color)'
        h3Elem.textContent = currText

        productTextDiv.appendChild(h3Elem);
    })

    iconObj.addEventListener('mouseleave', () => {

        const textEl = document.getElementById('icon_text_value')

        productTextDiv.removeChild(textEl)
        productTextDiv.appendChild(hoverOverText)
    })
});

//Future Work

// const productSection = document.getElementById('the_product_section')

// console.log(productSection.offsetTop)