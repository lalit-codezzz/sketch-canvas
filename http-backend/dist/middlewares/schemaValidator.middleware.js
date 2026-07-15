export default function schemaValidator(schema) {
    return (request, response, next) => {
        const data = request.body;
        const result = schema.safeParse(data);
        if (!result.success) {
            return response.status(400).json({
                success: false,
                sc: 400,
                error: result.error.issues[0].message,
            });
        }
        request.body = result.data;
        next();
    };
}
