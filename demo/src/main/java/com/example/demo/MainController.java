package com.example.demo;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MainController {
	
	private static final Logger logger = LoggerFactory.getLogger(MainController.class);

	@Autowired
	private MainService mainService;

	
	@GetMapping("api/post")
	public ModelAndView index() throws Exception {
		logger.info("get요청 컨트롤러로 들어옴");
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("api/post");
		modelAndView.addObject("boardList", mainService.boardSelect());
		return modelAndView;
	}
	
	@GetMapping("api/postt")
	public List<MainVO> index2() throws Exception {
		logger.info("get요청2 컨트롤러로 들어옴");
		List<MainVO> list = mainService.boardSelect();
		return list;
	}

	
	@PostMapping("api/post")
	public void insert(MainVO mainVO) throws Exception{
		logger.info("post요청 컨트롤러 들어옴"+mainVO);
		mainService.boardInsert(mainVO);
	}
	
	@DeleteMapping("api/post")
	public void delete(MainVO mainVO)throws Exception{
		mainService.boardDelete(mainVO);
	}
	
}
	
