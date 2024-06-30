import { Request, Response } from "express";
import Stocks from "../../models/stocksModel";

const updateStock = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        console.log('the id', id);
        const updateData = req.body;
        console.log('the body', updateData);
        const updatedStock = await Stocks.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedStock) {
            return res.status(404).json({ message: "Stock not found" });
        }
        res.status(200).json(updatedStock);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export default updateStock;
