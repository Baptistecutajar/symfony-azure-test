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
use Symfony\Component\DependencyInjection\ContainerInterface;

#[AsCommand(
    name: 'TestCron',
    description: 'Add a short description for your command',
)]
class TestCronCommand extends Command
{

    private $container;

    public function __construct(ContainerInterface $container)
    {
        parent::__construct();
        $this->container = $container;
    }


    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $em = $this->container->get('doctrine')->getManager();

        $article = new Article();
        $article->setTitle("Title ".time());
        $article->setContent("Content ".time());
        sleep(600);
        $em->persist($article);
        $em->flush();

        return Command::SUCCESS;
    }
}
