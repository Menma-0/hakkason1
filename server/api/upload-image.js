// import { IncomingForm } from 'formidable';
// import fs from 'fs';
// import path from 'path';

// export default async (req, res) => {
//   if (req.method === 'POST') {
//     const form = new IncomingForm();

//     form.parse(req, (err, fields, files) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//         return;
//       }

//       const oldPath = files.image.path;
//       const newPath = path.join(__dirname, '../static/uploads/', Date.now() + '.jpg'); // Adjust the path as needed

//       fs.rename(oldPath, newPath, (err) => {
//         if (err) throw err;

//         res.status(200).json({
//           message: 'Image uploaded successfully',
//           imageUrl: `/uploads/${Date.now()}.jpg`, // Adjust based on your static folder setup
//         });
//       });
//     });
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// };
