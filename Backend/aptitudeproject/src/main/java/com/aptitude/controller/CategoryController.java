package com.aptitude.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aptitude.entity.Category;
import com.aptitude.service.CategoryService;

@RestController
@RequestMapping("/api/Category")
public class CategoryController {

    @Autowired
    private CategoryService CategoryService;

    @PostMapping("/create")
    public Category createCategory(@RequestBody Category Category) {
        return CategoryService.saveCategory(Category);
    }

    @GetMapping("/find/{id}")
    public Category getCategoryById(@PathVariable long id) {
        return CategoryService.getCategoryById(id);
    }

    @GetMapping("/getAll")
    public List<Category> getAllCategories() {
        return CategoryService.getAllCategories();
    }

    @PutMapping("/update/{id}")
    public Category updateCategory(@PathVariable long id, @RequestBody Category Category) {
        return CategoryService.updateCategory(id, Category);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCategory(@PathVariable long id) {
        CategoryService.deleteCategory(id);
    }
}
