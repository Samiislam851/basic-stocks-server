import { Request, Response } from "express";
import Stocks from "../../models/stocksModel";

const deleteStock = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        console.log('the id', id);

        const deletedStock = await Stocks.findByIdAndDelete(id);
        console.log('the deleted item...', deletedStock);

        if (!deletedStock) {
            return res.status(404).json({ message: "Stock not found" });
        }
        res.status(200).json({ message: "Stock deleted successfully" });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export default deleteStock;