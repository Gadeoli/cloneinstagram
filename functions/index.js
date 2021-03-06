const functions = require('firebase-functions');
const cors = require('cors')({origin: true})
const fs = require('fs')
const uuid = require('uuid-v4')
const {Storage} = require('@google-cloud/storage')
const storage = new Storage({
    projectId: 'lambelambe-udemy',
    keyFilename: 'lambelambe-udemy-firebase-adminsdk.json'
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.uploadImage = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        try {
            const tmpImage = '/tmp/imageToSave.jpg'
            fs.writeFileSync(tmpImage, request.body.image, 'base64')

            const bucket = storage.bucket('lambelambe-udemy.appspot.com')
            const id = uuid()

            bucket.upload(tmpImage, {
                uploadType: 'media',
                destination: `/posts/${id}.jpg`,
                metadata: {
                    metadata: {
                        contentType: 'image/jpeg',
                        firebaseStorageDownloadTokens: id
                    }
                }
            }, (err, file) => {
                if(err){
                    console.log(err)
                    return response.status(500).json({error: err})
                }else{
                    const fileName = encodeURIComponent(file.name)
                    const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/' + 
                    bucket.name + '/o/' + fileName + '?alt=media&token=' + id

                    return response.status(201).json({imageUrl})
                }
            })
            
            bucket.upload(tmpImage)
        } catch (err) {
            console.log(err)
            return response.status(500).json({error: err})
        }
    })
});
