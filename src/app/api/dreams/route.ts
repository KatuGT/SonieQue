import { Category } from "@/app/models/category";

export async function GET(request: Request) {
  let res: Response;
  try {
    const categories = await Category.findAll({
      attributes: ['id', 'name', 'description']
    });
    res = Response.json(categories);
  } catch (err:any) {
    res = Response.json({ 'message': err.message });
  }
  return res;
}