
templates = [];

/* 
* Take the template json and generate the form fields
*/
function generateFieldsetFromTemplate(section, template) {
    let fieldset = document.createElement('fieldset');
    fieldset.id = section;
    fieldset.className = "item";
    let legend = document.createElement('legend');
    legend.innerHTML = section;
    fieldset.appendChild(legend);

    if (template && template.fields) {
        template.fields.forEach(function(field) {
            field.groups.forEach(function(group) {
                let div = document.createElement('div');
                let label = document.createElement('label');
                label.textContent = group.label;
                div.appendChild(label);

                group.inputs.forEach(function(input) {
                    let inputElement = document.createElement(input.tag);

                    input.attributes.forEach(function(attribute) {
                        inputElement.setAttribute(attribute.name, attribute.value);
                    });

                    if (input.default_value) {
                        inputElement.value = input.default_value;
                    }

                    if (input.options) {
                        input.options.forEach(function(option) {
                            let optionElement = document.createElement('option');
                            optionElement.value = option.value;
                            optionElement.textContent = option.text;
                            inputElement.appendChild(optionElement);
                        });
                    }

                    div.appendChild(inputElement);
                });

                fieldset.appendChild(div);
            });
        });
    }

    return fieldset;
}

/* 
* Handle the form submission
*/
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    console.log("form submitted");
    e.preventDefault();
    new FormData(form);
});
/* 
* Take the form fields, turn them in to a json data structure, iterate and create the page elements
*/
form.addEventListener("formdata", (e) => {
    console.log("formdata fired");
    const data = e.formData;
    let form_json = {}
    for (const pair of data.entries()) {
        //console.log(pair[0], pair[1]);
        form_json[pair[0]] = pair[1];
    }
    console.log(form_json);
    let div = document.createElement("div");
    if (data.get('element-type') == "text") {
        let text = document.createTextNode(form_json["text-content"]);
        div.appendChild(text);
    } else if (data.get('element-type') == "image") {
        let image_input = document.getElementById('image-input');
        let image_file = image_input.files[0];
        let image_element = document.createElement("img");  // Create a new img element

        if (image_file) {
            let image_url = URL.createObjectURL(image_file);  // Create a blob URL from the file
            image_element.src = image_url;
            //image_element.style.width = '100%';  // Optional: Set image style
            div.appendChild(image_element);  // Append the image to the body or any other container
            URL.revokeObjectURL(image_url);  // Optional: Clean up the blob URL after the image is loaded
        } else {
            console.log('No file was selected.');
            // Optionally handle the case where no file is selected
        }
    }

    let style = "position: absolute; ";
    let simpleKeys = ["top", "left", "font-size"]; // Removed "text-shadow" from this list
    let simpleKeysWithoutUnits = ["text-shadow"]; // Add more keys without units as needed
    let transformKeys = ["rotate", "skew", "scaleX", "scaleY"]; // Add more transform keys as needed
    let transformKeysWithoutUnits = ["scaleX", "scaleY"]; // Transform keys that don't have units
    let animationKeys = ["blink", "marquee"]; // Add more animation keys as needed

    function getTransformString(key, value, unit) {
        if (transformKeysWithoutUnits.includes(key)) {
            style += 'transform-origin: center left; ';
            return `${key}(${value})`;
        } else {
            return `${key}(${value}${unit})`;
        }
    }

    for (const key in form_json) {
        if (form_json.hasOwnProperty(key) && key != "element-type" && key != "text-content") {
            if (simpleKeys.includes(key)) {
                style += `${key}: ${form_json[key]}${form_json[key + "-unit"]}; `;
            } else if (transformKeys.includes(key)) {
                let transformValue = getTransformString(key, form_json[key], form_json[key + "-unit"]);
                style += `transform: ${transformValue}; `;
            } else if (animationKeys.includes(key)) {
                div.classList.add(key);
            } else if (simpleKeysWithoutUnits.includes(key)) {
                style += `${key}: ${form_json[key]}; `;
            } else if (!key.endsWith("-unit")) {
                style += `${key}: ${form_json[key]}; `;
            }
        }
    }
    div.setAttribute("style", style);
    
    let display = document.getElementById("inner-container-right");
    display.appendChild(div);

});
