import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Card, CardContent, CardDescription, CardTitle,}
from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";


const getBlogs=async()=>{
  const res=await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=10"
);
if(!res.ok){
  throw new Error("could not load files");
}
return await res.json();
};
async function BlogsPage() {
  const blogs= await getBlogs();
  return(
    <div className="p-2 flex flex-col justify-centre items-center">
      {blogs.blogs.length>0?(
        <div className="flex gap-5 flex-wrap items-center">
          {blogs.blogs.map((post:any)=>(
            <Link href={`/bolgs/${post.id}`}key={post.id}>
              <Card>
                <CardContent className="max-w-xs flex flex-col gap-1 p-4">
                  <Image src={post.photo_url} alt={post.title}
                  width={400}
                  height={400}
                  className="object-cover"/>
                  <CardTitle> {post.title} </CardTitle>
                  <CardDescription> {post.description} </CardDescription>
                  <div className="flex justify-between items-center">
                    <Badge variant="default" className="capitalize">
                      {post.category} </Badge>
                      <p className="font-bold">
                        Posted:{dayjs(post.created_at).format("DD-MM-YYYY")}
                      </p>
                  </div>
                </CardContent>
              </Card>
             { /*<div className="border p-5">
                <div className="text-2xl font-bold">{post.title}</div>
                <p>{post;.description}</p>
                </div>*/}             
            </Link>
          ))}
    </div>
  ):(
    <div className="text-red-500 font-extrabold">No blogs found</div>
  )}
  </div>
  );
};
export default BlogsPage;