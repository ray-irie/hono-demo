import { prisma } from "./prisma";

async function main() {
  // Delete all existing data
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  // Create users
  const user1 = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      name: 'Alice',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'bob@example.com',
      name: 'Bob',
    },
  });

  const user3 = await prisma.user.create({
    data: {
      email: 'charlie@example.com',
      name: 'Charlie',
    },
  });

  // Create posts
  await prisma.post.create({
    data: {
      title: 'First Post',
      content: 'This is Alice first post',
      published: true,
      authorId: user1.id,
    },
  });

  await prisma.post.create({
    data: {
      title: 'Second Post',
      content: 'This is Bob first post',
      published: false,
      authorId: user2.id,
    },
  });

  await prisma.post.create({
    data: {
      title: 'Third Post',
      content: 'This is Charlie first post',
      published: true,
      authorId: user3.id,
    },
  });

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
