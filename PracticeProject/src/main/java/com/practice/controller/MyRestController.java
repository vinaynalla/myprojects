package com.practice.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.practice.data.User;
import com.practice.dto.UserDto;
import com.practice.repository.UserRepository;

@RestController
@RequestMapping("/user")
public class MyRestController {
	
	@Autowired
	UserRepository userRepository;
	
	public static final Logger LOG = Logger.getLogger(MyRestController.class.getName());

	@RequestMapping(value = "/registerUser", method = RequestMethod.POST)
	@ResponseBody
	@Transactional
	public Map<String, String> registerUser(@RequestBody String userJson) throws JsonParseException, JsonMappingException, IOException {
		LOG.info("Begin of registerUser");
		ObjectMapper mapper = new ObjectMapper();
		mapper.findAndRegisterModules();
		UserDto userDto = mapper.readValue(userJson, UserDto.class);
		User user = new User();
		user.setCountry(userDto.getCountry());
		user.setDob(userDto.getDob());
		user.setEmail(userDto.getEmail());
		user.setFirstName(userDto.getFirstName());
		user.setGender(userDto.getGender());
		user.setPassword(userDto.getPassword());
		userRepository.saveAndFlush(user);
		LOG.info(userDto.toString());
		LOG.info(user.toString());
		LOG.info("End of registerUser");
		Map<String, String> response = new HashMap<>();
		response.put("result", "User Added successfully");
		return response;
	}
	
	@RequestMapping(value = "/{id}",method=RequestMethod.GET)
	@ResponseBody
	public User getUser(@PathVariable Long id)  {
		LOG.info("Begin of getUser");
		User user = userRepository.findOne(id);
		LOG.info(user.toString());
		LOG.info("End of getUser");
		return user;
	}
	
	@RequestMapping(method=RequestMethod.PUT)
	@ResponseBody
	@Transactional
	public User updateUser(@RequestBody String userJson) throws Exception  {
		LOG.info("Begin of updateUser");
		ObjectMapper mapper = new ObjectMapper();
		mapper.findAndRegisterModules();
		UserDto userDto = mapper.readValue(userJson, UserDto.class);
		User user = userRepository.findUserByEmail(userDto.getEmail());
		if(user == null) {
			throw new Exception("user Not found");
		}
		user.setCountry(userDto.getCountry());
		user.setDob(userDto.getDob());
		user.setEmail(userDto.getEmail());
		user.setFirstName(userDto.getFirstName());
		user.setGender(userDto.getGender());
		user.setPassword(userDto.getPassword());
		userRepository.saveAndFlush(user);
		LOG.info(userDto.toString());
		LOG.info(user.toString());
		LOG.info("End of updateUser");
		Map<String, String> response = new HashMap<>();
		response.put("result", "User updated successfully");
		return user;
		
	}
	
	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public List<User> getAllUsers(){
		LOG.info("Begin of getAllUsers()");
		LOG.info("End of getAllUsers()");
		return userRepository.findAll();
		
		
	}
}
