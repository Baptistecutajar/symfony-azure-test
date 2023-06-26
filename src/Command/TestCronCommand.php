<?php

namespace App\Command;

use App\Entity\Article;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Doctrine\ORM\EntityManagerInterface;

#[AsCommand(
    name: 'TestCron',
    description: 'Add a short description for your command',
)]
class TestCronCommand extends Command
{

    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        parent::__construct();
        $this->em = $em;
    }



    protected function execute(InputInterface $input, OutputInterface $output): int
    {

        $article = new Article();
        $article->setTitle("Title ".time());
        $article->setContent("Content ".time());
        sleep(600);
        $this->em->persist($article);
        $this->em->flush();

        return Command::SUCCESS;
    }
}
