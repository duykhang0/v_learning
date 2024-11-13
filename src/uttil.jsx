const { useRouter } = require("next/router");

function  dieuHuong (url) {
    const router = useRouter();
    router.push(url)
}
export default dieuHuong;