package com.practice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/")
public class HomeController {
	@RequestMapping(method = RequestMethod.GET)
	public String sayHello(ModelMap model) {
		model.addAttribute("greeting", "Hello World from Spring 4 MVC");
		return "welcome";
	}

	@RequestMapping(value = "/html/pages/user", method = RequestMethod.GET)
	public String aboutPartial(ModelMap model) {
		model.addAttribute("greeting", "Users Page");
		return "/pages/users";
	}

	@RequestMapping(value = "/html/pages/home", method = RequestMethod.GET)
	public String homePartial(ModelMap model) {
		model.addAttribute("greeting", "Home Page");
		return "/pages/home";
	}
}
