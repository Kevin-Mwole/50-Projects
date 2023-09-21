const labels = document.querySelectorAll(".form-control label");

//looping through the label text, split to array (individual letters), map array into span, then join array to text
labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split("")
        .map(
            (letter, idx) =>
                `<span style = "transition-delay: ${
                    idx * 100
                }ms"> ${letter}</span>`
        )
        .join("");
});
