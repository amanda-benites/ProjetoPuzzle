const connection = require('../config/db');
require("dotenv").config();

// BUCAR COMENTÁRIOS
async function listComment(request, response) {
    const postID = request.params.post_id
    const query = "SELECT C.comment_id, C.post_id, C.comment_content, U.user_name AS UserName FROM comments AS C INNER JOIN users AS U ON U.user_id = C.user_id WHERE C.post_id = ?";

    connection.query(query, [postID], (error, results) => {
        try {
            if (!error) {
                response.status(200).json({
                    success: true,
                    message: 'Success to list comments!',
                    data: results
                });
            } else { // Retorno com informações de erros
                response.status(400).json({
                    success: false,
                    message: `Unable to list comments`,
                    query: error.sql,
                    sqlMessage: error.sqlMessage
                });
            }
        } catch (error) {
            response.status(500).json({
                success: false,
                message: "As error ocurred. Unable to request informations!",
                error: e
            });
        }
    });
}

// CRIAR COMENTÁRIO
async function createComment(request, response) {
    const query = "INSERT INTO comments(post_id, user_id, comment_content) VALUES (?, ?, ?);";

    const params = Array(
        request.body.post_id,
        request.body.user_id,
        request.body.comment_content
    );

    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Success! Created comment.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Unable to create comment. Check your informations.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "An error ocurred. Unable to create comment.",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

module.exports = {
    listComment,
    createComment
}