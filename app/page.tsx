
import NewsWidget from '@/components/NewsWidget';
import Recent from '@/components/Recent';
import UserInformation from '@/components/UserInformation';
import PostForm from '@/components/back/PostForm';
import connectDB from '@/mongodb/db';
import { Post } from '@/mongodb/models/post';
import { SignedIn } from '@clerk/nextjs';
import PostFeed from '../components/back/PostFeed';


export const revalidate = 0;

export default async function Home(){

  await connectDB();
  const posts = await Post.getAllPosts();


  return (
    <div className="grid grid-cols-8 mt-5 sm:px-5">
      <section className="hidden md:inline md:col-span-2">
          <UserInformation posts={posts}/>

          <div className='flex p-3 w3/4 sm:px-0'>
            <div className=''>
              <Recent/>
            </div>
            
          </div>
          
      </section >
        
      <section className="col-span-full md:col-span-6 xl:col-span-4 xl:max-w-xl mx-auto w-full">
        <SignedIn>
          <PostForm />
        </SignedIn>
        
        <PostFeed posts= {posts}/>
      </section>
      
      <section className="hidden xl:inline justify-center col-span-2">
  
        <div className='flex p-3 w3/4'>
          <div className='w3/4'>
            <NewsWidget/>
          </div>
          
        </div>
        
      </section>
    </div>
  );
}