const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const fs = require("fs");
const path = require("path");

const createDocument = (req,res,next)=>{
    const render = req.body || {}
    
   try{
    const content = fs.readFileSync(
        path.resolve(__dirname, "simple.docx"),
        "binary"
    );
    const zip = new PizZip(content);
    
    const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
    });
    doc.render(render);
    

    const buf = doc.getZip().generate({
        type: "nodebuffer",
        // compression: DEFLATE adds a compression step.
        // For a 50MB output document, expect 500ms additional CPU time
        compression: "DEFLATE",
    });

    fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);
   }catch(e){
    return res.send({success:false,e})
   }

    return res.send({success:true});
}



module.exports = {
    createDocument
};