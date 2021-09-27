import React,{ useState } from "react";

const verifyData = (text) => {
    let data;
    try { data = JSON.parse(text) }
    catch (e) { return false }
    if (!data) return false
    if (!Number.isInteger(data.required) || !(data.required >= 0)) return false
    if (!Array.isArray(data.eGroup) || data.eGroup.length != 3) return false
    for(let i = 0; i < data.eGroup.length; i++) 
        if (!Number.isInteger(data.eGroup[i]) || !(data.eGroup[i] >= 0)) return false
    if (!Array.isArray(data.courses)) return false
    for (let i = 0; i < data.courses.length; i++){
        const course = data.courses[i]
        if (!(typeof course.belongsTo === "string")) return false
        if (!(typeof course.code === "string")) return false
        if (!(typeof course.name === "string")) return false
        if (!(typeof course.url === "string")) return false
        if (!(typeof course.credits === "number")) return false
    }
    return true
}

const Footer = ({data}) => {
    const [error, setError] = useState()
    const download = () => {
        const url = URL.createObjectURL(new Blob([JSON.stringify(data)], {type : 'application/json'}));
        // Create a link and set the URL using `createObjectURL`
        const link = document.createElement("a");
        link.style.display = "none";
        link.href = url;
        link.download = "creditusData.json";

        // It needs to be added to the DOM so it can be clicked
        document.body.appendChild(link);
        link.click();

        // To make this work on Firefox we need to wait
        // a little while before removing it.
        setTimeout(() => {
            URL.revokeObjectURL(link.href);
            link.parentNode.removeChild(link);
        }, 0);
    }

    const upload = (e) => {
        e.target.files[0].text().then((text)=>{
            if (verifyData(text)) {
                data.set(JSON.parse(text))
                localStorage.setItem("userData", text)
            } else {
                setError("bad file, upload another one")
                setTimeout(()=>setError(), 2000)
            }
        })
    }
    return (
        <footer>
            <button onClick={download}>
            donwload json
            </button>
            <label class="file-upload">
                <input name="myFile" type="file" accept="application/json" onChange={upload}/>
                upload json
            </label>
            { error && <p>{error}</p>}
            <a href="https://zavidnyi.com">@ Ilia Zavidnyi</a>
        </footer>
    );
}

export default Footer;