const asyncHandler = (requestHander) => {
    (req, res, next) => {
        Promise.resolve(requestHander(req, res, next)).catch((err) => next(err));
    }
}

export { asyncHandler }



// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 400).json({
//             sucsess: false,
//             message: error.message
//         })
//     }
// }

// export { asyncHandler }