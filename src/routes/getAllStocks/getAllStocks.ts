const getAllStocks = async (req: any, res: any) => {
    try {
        res.status(200).json({ success: true })
    } catch (error) {
        res.status(400).json({ success: false, error })
    }
}
export default getAllStocks