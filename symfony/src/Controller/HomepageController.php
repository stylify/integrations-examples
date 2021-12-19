<?php

// src/Controller/LuckyController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomepageController extends AbstractController
{
	/**
    * @Route("/")
    */
	public function default(): Response
	{
		return $this->render('homepage/homepage.html.twig');
	}
}
