import { getBlogs } from "@/app/actions/blog";
import { getCategories } from "@/app/actions/category";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { PlusCircle, Edit2 } from "lucide-react";
import DeleteBlogButton from "@/components/admin/DeleteBlogButton";
import CategoryManager from "@/components/admin/CategoryManager";

export default async function AdminDashboard() {
  const blogs = await getBlogs();
  const categories = await getCategories();

  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold tracking-tight">Admin Dashboard</h1>
        <Link href="/admin/dashboard/editor">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Create New Blog
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Manage Blogs</CardTitle>
              <CardDescription>
                View, edit, and delete your blog posts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogs.map((blog) => (
                    <TableRow key={blog.id}>
                      <TableCell className="font-medium">
                        {blog.title}
                      </TableCell>
                      <TableCell>{blog.views}</TableCell>
                      <TableCell>
                        {new Date(blog.createdAt!).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right flex justify-end space-x-2">
                        <Link href={`/admin/dashboard/editor/${blog.id}`}>
                          <Button variant="outline" size="sm">
                            <Edit2 className="h-4 w-4" />
                          </Button>
                        </Link>
                        <DeleteBlogButton id={blog.id} />
                      </TableCell>
                    </TableRow>
                  ))}
                  {blogs.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="text-center py-6 text-muted-foreground"
                      >
                        No blogs found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <CategoryManager initialCategories={categories} />
        </div>
      </div>
    </div>
  );
}
