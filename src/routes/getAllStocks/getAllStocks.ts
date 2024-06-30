import Stocks from "../../models/stocksModel"

const getAllStocks = async (req: any, res: any) => {
    try {
        const data = await Stocks.find({});
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(400).json({ success: false, error });
    }
}
export default getAllStocks