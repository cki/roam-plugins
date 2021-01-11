import userEvent from "@testing-library/user-event";

const ACTIVATE_TEXT = '**30';

// type text
async function typeText(element, text) {
    for (let char of text) {
        await userEvent.type(element, text, {
            skipClick: true,
        });
    }
}

// format silly day
function formatDay(day) {
    switch (day) {
    case 1: return day+'st';
    case 2: return day+'nd';
    case 3: return day+'rd';
    default: return day+'th';
    }
}

// this is probably in some API
function formatMonth(month) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                       ];
    return monthNames[month];
}

// formatting datetimestamp to silly roam format
function formatDate(dateTS) {
    let date = new Date(dateTS);
    let day = formatDay(date.getDate());
    let month = formatMonth(date.getMonth());
    let year = date.getFullYear();
    
    return month+' '+day+', '+year;
}


document.addEventListener('keydown', async (event) => {
    // silly computationally cheap test
    if (!(event.key === 'Enter' && event.shiftKey)) {
        return;
    }
    
    // we want to do this while somebody is typing in a roam document
    if (!(document.activeElement.tagName === 'TEXTAREA')) {
        return;
    }
    
    const textArea = document.activeElement;
    const text = textArea.value;
    
    // does not contain our text
    if (!(text.startsWith('**30'))) return;

    console.log('running 30-60-90');

    // select ACTIVATE_TEXT
    textArea.setSelectionRange(0, ACTIVATE_TEXT.length);
    
    // delete the text
    typeText(textArea, "{backspace}");

    // Write the dates
    let str30 = formatDate(new Date().getTime() - 1000 * 60 * 24 * 30);
    let str60 = formatDate(new Date().getTime() - 1000 * 60 * 24 * 60);
    let str90 = formatDate(new Date().getTime() - 1000 * 60 * 24 * 90);
    
    typeText(textArea, "[["+str30+"]] ");
    typeText(textArea, "[["+str60+"]] ");
    typeText(textArea, "[["+str90+"]] ");

});
