export default defineEventHandler((event) => {
    console.log("Acessando: " + getRequestURL(event));
    console.log(process.env.NODE_ENV);
})