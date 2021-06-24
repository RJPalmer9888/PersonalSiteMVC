using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntroToMVC.UI.MVC.Models
{
    public class FamilyMemberViewModel
    {
        //Fields
        private DateTime? _birthday = null;

        //Properties
        public int ID { get; } // Without a set; this is a read-only variable/property
        public string Name { get; set; }
        public string Relation { get; set; }
        public DateTime Birthday { get; set; } //"Containment" = when a complex (non-primative) 
                                               // data type is used as a property

        //Constructor
        public FamilyMemberViewModel(){}
        public FamilyMemberViewModel(int id, string name, string relation, DateTime bday)
        {
            // Assignment
            ID = id;
            Name = name;
            Relation = relation;
            Birthday = bday;
        }
        //Methods
        public override string ToString()
        {
            return $"Name: {Name} <br />Relationship: {Relation}" +                $"<br />Birthday: {Birthday.ToString("MM/dd/yyyy")}";

        }
    }
}